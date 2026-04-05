# Dappled Light (斑驳树影) 实现方案

## 概述

Dappled Light 是网页中的一个基于CSS和JavaScript实现的一个视觉效果，用于模拟阳光透过树叶或窗帘产生的斑驳光影。这种效果为页面增添了自然的光影氛围，增强了阅读体验。

## 技术原理

### 核心理念
- **大面积明暗分区**：不绘制具体的树叶或枝条，而是通过大块的明暗区域交替来模拟整体遮挡效果
- **光源方向性**：模拟斜射阳光（通常-30度角度），产生真实的投影拉伸效果
- **多层叠加**：使用多层元素（wash、shadows、bokeh、grain）通过不同的混合模式和透明度创建层次感

### 实现架构

#### 1. HTML 结构
```html
<div class="dappled-layer" aria-hidden="true">
  <div class="dappled-layer__wash"></div>
  <div class="dappled-layer__shadows" id="dappled-shadows"></div>
  <div class="dappled-layer__bokeh" id="dappled-bokeh"></div>
  <div class="dappled-layer__grain"></div>
</div>
```

#### 2. CSS 层级系统
- **dappled-layer**: 固定定位全屏容器，pointer-events: none
- **dappled-layer__wash**: 背景渐变层，提供整体色调
- **dappled-layer__shadows**: 动态生成的阴影元素层
- **dappled-layer__bokeh**: 动态生成的光斑元素层
- **dappled-layer__grain**: 噪点纹理层，增加真实感

#### 3. JavaScript 动态生成

##### 核心函数
- `shadowMass()`: 创建大面积椭圆阴影，模拟树冠遮挡
- `lightSpot()`: 创建圆形光斑，模拟光线穿透
- `lightRays()`: 创建斜向光条，模拟窗帘或叶隙透光

##### 主题适配
根据 `data-style` 属性生成不同的光影模式：
- **default**: 树冠光影（大面积遮挡 + 散射光斑）
- **warm**: 暖光条穿过树冠
- **sky**: 十字窗投影
- **night**: 月光散射
- **spring**: 散射光斑 + 细碎遮挡

##### 随机化算法
使用线性同余发生器（LCG）确保每次加载的图案一致但自然：
```javascript
function R() { 
  seed = (seed * 16807) % 2147483647; 
  return (seed - 1) / 2147483646; 
}
```

#### 4. CSS 变量系统
每个主题定义不同的颜色和参数：
```css
:root {
  --dappled-shadow-color: rgba(40, 50, 65, 0.62);
  --dappled-light-color: rgba(255, 255, 255, 0.6);
  --dappled-bokeh-color: rgba(255, 248, 230, 0.85);
  /* ... 其他变量 */
}
```

#### 5. 动画系统
- **dappledDrift**: 缓慢的漂移动画，模拟光影随时间变化
- **dappledNoise**: 噪点纹理的随机移动
- 支持 `prefers-reduced-motion` 媒体查询

## 性能优化

### 启用控制
- 通过 `data-dappled="off"` 完全禁用
- CSS 变量 `--dappled-enabled` 控制透明度

### 移动端适配
- 减少模糊半径和透明度
- 调整背景渐变范围

### 混合模式
- 使用 `mix-blend-mode: soft-light` 创建自然的光影融合
- backdrop-filter 为纸张元素提供模糊和饱和度增强

## 扩展性

### 添加新主题
1. 在 CSS 中定义新的 `[data-style="new-theme"]` 规则
2. 在 JavaScript 的 switch 语句中添加对应的生成函数
3. 实现特定的阴影和光斑生成逻辑

### 自定义参数
通过修改 CSS 变量可以调整：
- 颜色方案
- 模糊程度
- 透明度
- 动画速度

## 文件结构

相关代码文件：
- `layouts/_default/baseof.html`: HTML 结构定义
- `static/css/main.css`: 样式定义和变量
- `static/js/main.js`: 动态生成逻辑

这个实现方案展示了如何使用现代 CSS 和 JavaScript 技术创建复杂的视觉效果，同时保持良好的性能和可维护性。
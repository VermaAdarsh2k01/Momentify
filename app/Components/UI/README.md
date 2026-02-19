# Clip Reveal Animation Components

A collection of React components that provide smooth clipping polygon reveal animations using GSAP. These components act as wrappers that can contain any child content (images, text, videos, etc.) and animate their reveal with customizable clipping paths.

## Components

### 1. ClipRevealWrapper
Basic wrapper component with essential clipping polygon animations.

### 2. AdvancedClipReveal
Advanced wrapper with additional animation effects and full programmatic control.

### 3. ClipRevealExamples
Demo component showcasing various usage patterns.

## Features

- ✅ **Flexible Content**: Works with any child content (images, text, videos, components)
- ✅ **Multiple Reveal Patterns**: Center, left, right, top, bottom, diagonal, circle, diamond, star, hexagon, wave
- ✅ **Custom Clip Paths**: Define your own polygon shapes
- ✅ **Additional Effects**: Scale, rotation, opacity, blur animations
- ✅ **Programmatic Control**: Start, stop, pause, reverse animations
- ✅ **Responsive**: Works across all screen sizes
- ✅ **Performance Optimized**: Uses GSAP for smooth 60fps animations
- ✅ **TypeScript Ready**: Full prop validation and type safety

## Installation

Make sure you have GSAP and @gsap/react installed:

```bash
npm install gsap @gsap/react
```

## Basic Usage

### Simple Image Reveal

```jsx
import ClipRevealWrapper from './Components/UI/ClipRevealWrapper';

function MyComponent() {
  return (
    <ClipRevealWrapper
      direction="center"
      duration={1.5}
      delay={0.5}
      className="w-full h-64 rounded-lg overflow-hidden"
    >
      <img 
        src="/path/to/image.jpg" 
        alt="Description"
        className="w-full h-full object-cover"
      />
    </ClipRevealWrapper>
  );
}
```

### Advanced Animation with Multiple Effects

```jsx
import AdvancedClipReveal from './Components/UI/AdvancedClipReveal';

function MyComponent() {
  return (
    <AdvancedClipReveal
      direction="diamond"
      duration={2}
      delay={1}
      scale={true}
      rotation={true}
      opacity={true}
      className="w-full h-96"
    >
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
        <h2 className="text-4xl font-bold">Amazing Content</h2>
        <p>This can be any content you want!</p>
      </div>
    </AdvancedClipReveal>
  );
}
```

### Manual Control

```jsx
import { useRef } from 'react';
import AdvancedClipReveal from './Components/UI/AdvancedClipReveal';

function MyComponent() {
  const revealRef = useRef(null);

  const handleReveal = () => {
    revealRef.current?.triggerReveal();
  };

  const handleHide = () => {
    revealRef.current?.reverseReveal();
  };

  return (
    <div>
      <AdvancedClipReveal
        ref={revealRef}
        direction="circle"
        triggerOnMount={false}
        scale={true}
      >
        <img src="/image.jpg" alt="Controlled reveal" />
      </AdvancedClipReveal>
      
      <button onClick={handleReveal}>Show</button>
      <button onClick={handleHide}>Hide</button>
    </div>
  );
}
```

## Props Reference

### ClipRevealWrapper Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | Content to be revealed |
| `duration` | number | 1.5 | Animation duration in seconds |
| `delay` | number | 0 | Delay before animation starts |
| `ease` | string | "power2.inOut" | GSAP easing function |
| `direction` | string | "center" | Reveal direction (see directions below) |
| `triggerOnMount` | boolean | true | Auto-start animation on component mount |
| `className` | string | "" | CSS classes for wrapper |
| `style` | object | {} | Inline styles for wrapper |
| `onComplete` | function | null | Callback when animation completes |

### AdvancedClipReveal Props

Includes all ClipRevealWrapper props plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onStart` | function | null | Callback when animation starts |
| `customClipPath` | object | null | Custom clip path with initial/final states |
| `stagger` | number | 0 | Stagger delay for multiple children |
| `repeat` | number | 0 | Number of animation repeats |
| `yoyo` | boolean | false | Reverse animation on repeat |
| `scale` | boolean | false | Add scale animation effect |
| `rotation` | boolean | false | Add rotation animation effect |
| `opacity` | boolean | false | Add opacity animation effect |
| `blur` | boolean | false | Add blur animation effect |

### Available Directions

- `center` - Reveals from center outward
- `left` - Reveals from left to right
- `right` - Reveals from right to left
- `top` - Reveals from top to bottom
- `bottom` - Reveals from bottom to top
- `diagonal` - Reveals diagonally
- `circle` - Circular reveal from center
- `diamond` - Diamond-shaped reveal
- `hexagon` - Hexagonal reveal
- `star` - Star-shaped reveal
- `wave` - Wave-like reveal

### Custom Clip Paths

You can define custom polygon shapes:

```jsx
<AdvancedClipReveal
  customClipPath={{
    initial: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    final: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
  }}
>
  {/* Your content */}
</AdvancedClipReveal>
```

### Ref Methods (AdvancedClipReveal)

When using a ref, you get access to these methods:

```jsx
const revealRef = useRef(null);

// Available methods:
revealRef.current.triggerReveal(customDuration);
revealRef.current.reverseReveal(customDuration);
revealRef.current.pauseAnimation();
revealRef.current.resumeAnimation();
revealRef.current.restartAnimation();
revealRef.current.timeline; // Access to GSAP timeline
```

## Performance Tips

1. **Use `will-change: transform`** on animated elements for better performance
2. **Avoid animating too many elements** simultaneously
3. **Use `triggerOnMount={false}`** for better control over when animations start
4. **Consider using `stagger`** for multiple elements instead of individual delays

## Examples in Your Project

Since you're already using GSAP in your Hero component, you can easily integrate these wrappers:

```jsx
// In your Hero component or any other component
import ClipRevealWrapper from '../UI/ClipRevealWrapper';

// Wrap your video or any content
<ClipRevealWrapper
  direction="center"
  duration={2}
  delay={1}
  className="relative w-full h-full bg-white overflow-hidden"
>
  <video src="/hero_vid.mp4" autoPlay muted loop className='w-full h-full object-cover' />
</ClipRevealWrapper>
```

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 12+)
- IE: Not supported (uses modern CSS clip-path)

## License

Part of your Momentify project components.
# NgxFadeComponent

The `NgxFadeComponent` is a versatile Angular component that provides a smooth fading and sliding effect for its content as it enters or leaves the viewport. This component uses the IntersectionObserver API to detect when the component is in view and apply the defined transition effects. It's fully customizable with different transition directions, durations, and easing functions.

## Features

- `Viewport Detection`: Automatically fades and slides the content when it enters or leaves the viewport.
- `Flexible Directions`: Supports transitions from different directions such as up, down, left, and right.
- `Custom Transforms`: You can fully customize the transform property, overriding the default directional behavior.
- `Customizable Timing`: Control the transition duration and easing function for smooth animations.

## Installation

Install the component via npm:

```bash
npm install @omnedia/ngx-fade
```

## Usage

Import the `NgxFadeComponent` in your module or component:

```typescript
import { NgxFadeComponent } from '@omnedia/ngx-fade';

@Component({
  ...
  imports: [
    NgxFadeComponent,
    ...
  ],
  ...
})
export class YourComponent {}
```

Add the component to your template:

```html
<om-fade [direction]="'up'" [transitionDuration]="'1s'" [transitionFunction]="'ease-out'">
  <p>Fading content from the bottom</p>
</om-fade>
```

### Inputs

- `direction` (optional): The direction from which the content should slide in. Accepts "up", "down", "left", or "right". The content will fade in from this direction. If a customTransform is provided, it will override this input.
- `transitionDuration` (optional): The duration of the transition, specified as a valid CSS duration value (e.g., "1s", "500ms"). Default is "0.5s".
- `transitionFunction` (optional): The easing function for the transition, specified as a valid CSS transition timing function (e.g., "ease-in-out", "linear"). Default is "ease-in-out".
- `customTransform` (optional): A custom CSS transform value to override the direction behavior. If set, this custom transform will take precedence over the direction input.

## Custom Transforms

If you want more control over how the element is transformed, you can use the customTransform input, which allows you to specify any CSS transform, such as rotating or scaling the element. This input overrides the direction setting.

```html
<om-fade [customTransform]="'rotate(45deg)'" [transitionDuration]="'1s'">
  <p>Custom rotated content</p>
</om-fade>
```

In this example, instead of sliding the content in from a direction, it will appear with a 45-degree rotation.

## Example

```html
<om-fade [direction]="'left'" [transitionDuration]="'2s'" [transitionFunction]="'ease-in'">
    <h2>Fading In from Left</h2>
</om-fade>
<om-fade [customTransform]="'scale(0.5)'" [transitionDuration]="'1.5s'">
  <h2>Custom Scaling Effect</h2>
</om-fade>
```

## How It Works

- The component uses the IntersectionObserver API to monitor when the component enters or leaves the viewport.
- Upon entering the viewport, the content will fade in and slide from the direction specified by the direction input (or use the custom transform if defined).
- The transitionDuration and transitionFunction inputs allow you to fine-tune the animation timing.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss your ideas.

### License

This project is licensed under the MIT License.

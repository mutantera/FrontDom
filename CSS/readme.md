## CSS Basics

- **color**: Specifies the text color.
- **background color**: Sets the background color.

### Units
- **px**: Avoided for overall design as it can distort; prefer using 'vw' instead.
- **%**: Represents a portion of the whole; e.g., `width: 70%` means 70% of the screen width.
- **vw/vh**: Always relative to the screen, useful for responsive design.
- **em**: Depends on the element's font size; if set on parent, applies to children as well.
- **rem**: Depends on the font size of the HTML tag.

### Width Constraints
- **max-width**: Sets the maximum width; won't exceed this value.
- **min-width**: Sets the minimum width; won't shrink below this value.

### Typography
- **font-family**: Choose between 'sans serif' (no edges) and 'serif' (with edges).
- **text-transform**: Capitalizes the first letter of each word.

### Spacing
- **padding**: Adds space around the element, outside of the border.
- **margin**: Adds space between elements, inside the border.

### Display
- **display**:
  - **block**: Takes up full space, even if empty.
  - **inline**: Allows other elements to be beside it; won't increase width and height if there are two inline elements.

### Positioning
- **position**: Specifies the positioning method for an element.

### Flexbox
- Useful for arranging elements in a single direction.

### Pseudo-elements
- **::before**, **::after**: Inserts content before or after the selected element.
- **::first-line**: Styles the first line of a block-level element.
- **::first-letter**: Styles the first letter of a block-level element.
- **::selection**: Styles the portion of the document that is selected.

### Pseudo-classes
- **:hover**: Applies styles when the mouse hovers over the element.
- **:active**: Applies styles when the element is being activated.
- **:focus**: Applies styles when the element is focused.
- **:nth-child(n)**: Selects elements based on their order in relation to siblings.

### Grid Layout
- Provides a two-dimensional layout capability, useful for complex layouts.

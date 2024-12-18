# DropZoneComponent

A React component that provides a drag-and-drop file upload interface. This component allows users to drag files into a designated area and handles the file upload process.

## Installation

1. To install the `DropZoneComponent` in your React project, you can install it via npm. Run the following command in your terminal:
```bash
npm install @istvzsig/dropzone
```
2. Import the component: In the file where you want to use the ```DropZoneComponent```, import it as follows:
```javascript
import DropZoneComponent from '@istvzsig/dropzone';

```
3. Use the component: You can now use the ```DropZoneComponent``` in your JSX:
```javascript
function App() {
  return (
    <div>
      <h1>File Upload</h1>
      <DropZoneComponent />
    </div>
  );
}

export default App;
```

## Usage

The ```DropZoneComponent``` provides a simple interface for file uploads. When files are dragged over the component, it will visually indicate that it is ready to accept files. Upon dropping files, the component will call the provided ```asyncCallback``` function with the file data.

### Props

The ```DropZoneComponent``` does not accept any props directly. However, you can customize the behavior of the file handling by modifying the ```asyncCallback``` function in the ```onDrop``` event.

### Example

Here is an example of how to use the ```DropZoneComponent``` with a custom file handling function:
```jsx
<DropZoneComponent onDrop={(fileData) => {
  console.log('File data:', fileData);
  // Handle the file data (e.g., upload to a server)
}} />
```

## CSS Styles

The component uses the following CSS for styling. You can customize the styles in ```drop-zone-component.css``` to fit your application's design.

## License

This component is open-source and available for use in your projects. Please feel free to modify and distribute it as needed.

## Acknowledgments

This component was built using React and leverages the power of hooks for managing state and side effects.

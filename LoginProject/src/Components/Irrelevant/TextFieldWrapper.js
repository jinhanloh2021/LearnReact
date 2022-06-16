import FullWidthTextField from './FullWidthTextField';

//This style variable is really hacky, but if I use FullWidthTextField without divs, they will overlap
//becaue the position is absolute. I don't want to make two separate components for username and for password. I want to reuse.
const positioningStyle = {
  position: 'absolute',
  marginLeft: 'auto',
  marginRight: 'auto',
  left: 0,
  right: 0,
  textAlign: 'center',
  top: 200,
};

export default function TextFieldWrapper() {
  return (
    <div style={positioningStyle}>
      <div>
        <FullWidthTextField label="Name" />
      </div>
      <div>
        <FullWidthTextField label="Age" />
      </div>
    </div>
  );
}

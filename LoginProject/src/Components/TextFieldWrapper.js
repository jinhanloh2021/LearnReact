import FullWidthTextField from './FullWidthTextField';

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
        <FullWidthTextField label="Username" />
      </div>
      <div>
        <FullWidthTextField label="Password" />
      </div>
    </div>
  );
}

import SignInHeader from './SignInHeader';
import InstructionLine from './InstructionLine';
import LoginForm from './LoginForm';
import LoginOptions from './LoginOptions';

const positioningStyle = {
  position: 'absolute',
  marginLeft: 'auto',
  marginRight: 'auto',
  left: 0,
  right: 0,
  textAlign: 'center',
  width: '27.1%',
  height: '56.34%',
  // backgroundColor: 'white',
  top: 180,
};

export default function SignInDiv() {
  return (
    <div style={positioningStyle}>
      <SignInHeader />
      <InstructionLine />
      <LoginForm />
      <LoginOptions />
    </div>
  );
}

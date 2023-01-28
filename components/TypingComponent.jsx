import { TypeAnimation } from 'react-type-animation';

  const TypingComponent = () => {
  return (
    <TypeAnimation
      
      sequence={[
        'Santiago  Sonzini', // Types 'One'
        1000, // Waits 1s
        'BackEnd Developer', // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        'Data Scientist in progress', // Types 'Three' without deleting 'Two'
        1500,
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '3em', fontWeight: 900, textAlign: 'center', color: 'white' }}
     />
  );
};

export default TypingComponent
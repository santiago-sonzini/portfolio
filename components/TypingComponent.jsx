import { TypeAnimation } from 'react-type-animation';

  const TypingComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'Santiago \n Sonzini', // Types 'One'
        1000, // Waits 1s
        'BackEnd Developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Data Scientist in progress', // Types 'Three' without deleting 'Two'
        1500,
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '4.9em', fontWeight: 900 }}
    />
  );
};

export default TypingComponent
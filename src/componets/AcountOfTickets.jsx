import { useState } from 'react';


const OPTIONS = [
  { label: '84 tickets', value: 84 },
  {label: '276 tickets', value: 276},
  { label: '468 tickets', value: 468 },
  { label: '948 tickets', value: 948 },
];

// eslint-disable-next-line react/prop-types
const ListOfCount = () => {
  const [selectedOption, setSelectedOption] = useState(OPTIONS[0].value);


  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className='grid gap-3 max-w-md px-4'>
      <h4 className="font-semibold">Cantidad de tickets:</h4>
        <div className='flex items-center justify-around'>
        {OPTIONS.map((option) => (
          <div key={option.value} className='flex gap-1'>
              <input
                type="radio"
                value={option.value}
                checked={selectedOption === option.value}
                name="acount"
                id={option.value}
                onChange={() => handleOptionChange(option.value)}
              />
              <label htmlFor={option.value} >
              {option.label}
              </label>
          </div>
        ))}
        </div>
    </div>
  );
};

export default ListOfCount

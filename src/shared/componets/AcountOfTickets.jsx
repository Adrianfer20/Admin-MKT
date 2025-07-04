import { useState } from 'react';


const OPTIONS = [
  { label: '84 tickets', value: 84 },
  {label: '248 tickets', value: 248},
  { label: '468 tickets', value: 468 },
  { label: '948 tickets', value: 948 },
];

// eslint-disable-next-line react/prop-types
const ListOfCount = () => {
  const [selectedOption, setSelectedOption] = useState(OPTIONS[3].value);


  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className='grid gap-3'>
      <h4 className="font-semibold text-sm">Cantidad de Tickets:</h4>
        <div className='flex flex-wrap items-center justify-around'>
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

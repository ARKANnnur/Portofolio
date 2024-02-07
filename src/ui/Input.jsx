/* eslint-disable react/prop-types */
function Input({ typeElement = 'input', type = 'text', placeholder, color = 'white', resize }) {
  const style = `border-b border-${color} bg-transparent outline-none focus:border-b-2 focus:border-${color}`;

  return (
    <>
      {typeElement === 'input' ? (
        <input type={type} className={style} placeholder={placeholder} />
      ) : (
        <textarea type={type} className={`${style} ${resize}`} placeholder={placeholder} />
      )}
    </>
  );
}

export default Input;

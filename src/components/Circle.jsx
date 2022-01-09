export default function Circle({ additionalStyles, children }) {
  return (
    <p className={`h-[75%] w-[75%] flex justify-center items-center text-gray-50 rounded-full ${additionalStyles}`}>
      {children}
    </p>
  );
};
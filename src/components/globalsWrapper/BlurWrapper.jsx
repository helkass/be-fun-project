const BlurWrapper = ({ children, className }) => {
   return (
      <div
         className={`rounded-xl z-20 border blur-wrap border-white p-3 mx-5 ${className}`}>
         {children}
      </div>
   );
};

export default BlurWrapper;

import React from 'react';

interface ModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? '' : 'hidden'}`}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75" />
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${
            isOpen ? 'sm:w-2/3' : ''
          }`}
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div className='flex justify-between items-center'>
                <h3
                  className="text-lg leading-6 font-medium text-gray-900 mb-3"
                >
                  {title}
                </h3>
                <button
                  onClick={onClose}
                  className="text-lg leading-6 font-medium text-gray-900 mb-3"
                >
                  x
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;

import TFormSchema from '@/types/TFormSchema'

export default function Modal({
  isFormData,
  isModal,
}: {
  isFormData: TFormSchema
  isModal: boolean
}) {
  return (
    <div
      className={`fixed top-0 right-0 left-0 bottom-0 z-50 bg-brand-black text-blue-50 font-text  
      flex justify-center items-start h-screen
      opacity-0 backdrop-blur-sm pointer-events-none
      w-full overflow-y-scroll ${
        isModal &&
        'opacity-100 bg-opacity-80 animate-open-menu pointer-events-auto '
      }`}
    >
      <div className="w-4/5 max-w-xl flex flex-col justify-center gap-8">
        <div className="h-6 relative lg:h-10">
          <div
            className={`bg-brand-purple h-full absolute ${
              isModal && 'opacity-100 bg-opacity-80 animate-progress'
            }`}
          />
        </div>
        <h4>
          <b className="text-brand-purple text-lg lg:text-3xl">
            Thanks for the feedback!
          </b>
        </h4>
        <p className="lg:text-xl">
          <b className="text-brand-purple">Name: </b>
          {isFormData.name}
        </p>
        <p className="lg:text-xl">
          <b className="text-brand-purple">Email: </b>
          {isFormData.email}
        </p>
        {isFormData.complaints.map((item, index) => (
          <div key={index}>
            <p className="lg:text-xl">
              <b className="text-brand-purple">Category: </b>
              {item.category}
            </p>
            <p className="break-words lg:text-xl lg:mt-4">
              <b className="text-brand-purple">Message: </b>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

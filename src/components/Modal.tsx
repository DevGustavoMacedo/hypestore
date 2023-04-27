import TFormSchema from '@/types/TFormSchema'

export default function Modal({ isFormData }: { isFormData: TFormSchema }) {
  return (
    <div
      className="fixed top-0 right-0 left-0 bottom-0 z-50 bg-brand-black text-blue-50 font-text  
      flex justify-center items-start h-screen
      opacity-0 backdrop-blur-sm pointer-events-none
      w-full overflow-y-scroll"
      id="modal"
    >
      <div className="w-4/5 max-w-xl flex flex-col justify-center gap-8">
        <div className="h-6 relative">
          <div id="progress" className="bg-brand-purple h-full absolute" />
        </div>
        <h4>
          <b className="text-brand-purple text-lg">Thanks for message!</b>
        </h4>
        <p>
          <b className="text-brand-purple">Name: </b>
          {isFormData.name}
        </p>
        <p>
          <b className="text-brand-purple">Email: </b>
          {isFormData.email}
        </p>
        {isFormData.complaints.map((item, index) => (
          <div key={index}>
            <p>
              <b className="text-brand-purple">Category: </b>
              {item.category}
            </p>
            <p className="break-words">
              <b className="text-brand-purple">Message: </b>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

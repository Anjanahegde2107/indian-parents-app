const steps = [
    { id: "01", name: "Sign Up", description: "Create an account and fill in your child's details." },
    {
      id: "02",
      name: "Assessment",
      description: "Complete a comprehensive assessment of your child's interests and aptitudes.",
    },
    {
      id: "03",
      name: "Personalized Plan",
      description: "Receive a tailored education and career plan based on the assessment.",
    },
    { id: "04", name: "Ongoing Support", description: "Get continuous guidance and support as your child progresses." },
  ]
  
  export default function HowItWorks() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">How It Works</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Four simple steps to a brighter future
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our process is designed to be straightforward and effective, ensuring that you and your child get the best
              guidance possible.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {steps.map((step) => (
                <div key={step.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <span className="text-lg font-semibold leading-7 text-white">{step.id}</span>
                    </div>
                    {step.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{step.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  
  
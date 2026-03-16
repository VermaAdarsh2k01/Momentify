import React from 'react'
import Copy from '../TextAnimation/Copy'
import ContactButton from '../ContactButton/ContactButton'

const NewAbout = () => {
  return (
    <div className='h-screen bg-[#ffffff] w-full p-16'>
        <div className=' max-w-6xl mx-auto h-full flex flex-col items-center justify-center'>
            <div className='h-[40%] w-full'>
                <div className='max-w-3xl me-auto'>
                    <p className="font-body text-4xl font-body">
                    Since 2016, we're a team of all in all{" "}
                    <span className="italic font-title">experienced</span>{" "}
                    consultations, <span className="font-semibold">combine</span> for
                    strategic instant.
                    </p>
                </div>
            </div>

            <div className='h-[60%] w-full '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 items-start h-full'>
                    <div className='h-full'>
                        <div className='flex flex-col justify-between h-full'>
                            <div className='h-fit'>
                                <p className="text-[0.95rem] sm:text-[1rem] text-[#444] max-w-md">
                                    At Momentify, we help businesses navigate complexity, unlock
                                    growth, and achieve lasting transformation with a team of
                                    experienced consultants. We combine strategic thinking with
                                    precise execution to design experiences that move brands and
                                    people forward.
                                </p>
                            </div>
                            <div className='h-fit flex items-end gap-4 mt-2'>
                                <div className="w-1 h-full bg-[#8F1B32] shrink-0" />
                                <div className="flex flex-col gap-1">
                                    <div className="text-[2.2rem] sm:text-[2.6rem] font-body text-[#111]">150+</div>
                                    <p className="text-[0.78rem] uppercase tracking-[0.16em] text-[#222]">
                                        Successful Projects Delivered
                                    </p>
                                    <p className="text-[0.9rem] text-[#666] max-w-xs">
                                        Across industries and markets, pairing insight with impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-full' >
                        <div className='h-full w-full overflow-hidden rounded-3xl shadow-[0_20px_45px_rgba(0,0,0,0.18)] bg-[#111] '>
                            <img src="/owner.webp" alt="Momentify team" className='w-full h-[420px] object-cover origin-bottom' />
                        </div>
                        
                    </div>
                    <div className='h-full flex flex-col justify-end gap-2'>
                        <Copy delay={0.2} type="slide">
                            <div className="w-full bg-white rounded-3xl px-6 py-6 flex flex-col justify-between gap-6 shadow-[0_18px_40px_rgba(10,10,10,0.16)] max-w-xs mx-auto lg:mx-0">
                                <div className="flex flex-col gap-4">
                                    <span className="w-3 h-3 rounded-full bg-[#2d4bff] shadow-[0_0_0_6px_rgba(45,75,255,0.2)]" />
                                    <span className='leading-none mb-0 mt-0 font-body '>
                                        Let's connect and have a discovery call for free 
                                    </span>
                                </div>
                            </div>
                        </Copy>
                        <div>

                        </div>
                        <div className='w-full flex justify-start'>
                            <ContactButton size="sm" className=''/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewAbout
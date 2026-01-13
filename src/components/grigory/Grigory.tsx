'use server'
import React from 'react'
import Navbar from '@/components/grigory/navbar/Navbar'
import Block from '@/components/grigory/block/Block'
import Heading from '@/components/shared/heading/Heading'
import HeadingLarge from '@/components/shared/heading/HeadingLarge'
import Image from '@/components/shared/image/Image'
import { SocialIcon } from 'react-social-icons'

export const Grigory: React.FC = async () => {
  return (
    <div>
      <Navbar />
      <Block className='lg:mt-20'>
        <HeadingLarge level={1} className='px-14 sm:px-0'>
          Grigory Gushcha
        </HeadingLarge>
        <p className='text-slate-600 pt-2'>
          Audio Producer/Engineer
        </p>
        <p className='pb-4 text-slate-600'>
          Belgrade, Serbia
        </p>
        <p>
          Film Audio Post/Mixing, Location Sound, Music Mixing/Mastering
        </p>
      </Block>
      <Block className='mt-4' separatorVariant={0}>
        <div className='hidden lg:block'>
          <HeadingLarge level={2}>Services</HeadingLarge>
          <div className="grid sm:grid-cols-3 gap-8">
            <a href="#film_audio_post_mixing">
              <div className='transition-all duration-200 hover:translate-y-[-8px] hover:shadow-2xl rounded-lg p-2 -m-2'>
                <Image enablePreview={false} src="/assets/grigory/img/v1_988.png" alt="Film Audio Post/Mixing" className="rounded-lg w-full h-64 object-cover mb-4" />
                <h3 className="text-xl font-semibold mb-2">Film Audio Post/Mixing</h3>
                <p className="text-gray-600">Professional Audio post-production for any media content.</p>
              </div>
            </a>
            <a href="#location_sound">
              <div className='transition-all duration-200 hover:translate-y-[-8px] hover:shadow-2xl rounded-lg p-2 -m-2'>
                <Image enablePreview={false} src="/assets/grigory/img/v1_993.png" alt="Location Sound" className="rounded-lg w-full h-64 object-cover mb-4" />
                <h3 className="text-xl font-semibold mb-2">Location Sound</h3>
                <p className="text-gray-600">Production Sound engineering for interviews, advertisements, feature films etc.</p>
              </div>
            </a>
            <a href="#music_mixing">
              <div className='transition-all duration-200 hover:translate-y-[-8px] hover:shadow-2xl rounded-lg p-2 -m-2'>
                <Image enablePreview={false} src="/assets/grigory/img/v1_998.png" alt="Music Mixing/Mastering" className="rounded-lg w-full h-64 object-cover mb-4" />
                <h3 className="text-xl font-semibold mb-2">Music Mixing/Mastering</h3>
                <p className="text-gray-600">Crafting professional, release-ready mixes and mastering them to the industry standards for any digital platform or other distribution option.</p>
              </div>
            </a>
          </div>
        </div>
        <div className='relative lg:mt-4'>
          <span id="about" className='absolute top-[-1000px] lg:top-[-80px]' />
          <div className="flex flex-col md:flex-row gap-4 lg:gap-20 md:justify-between">
            <div className="flex flex-col gap-4 max-w-[900px]">
              <HeadingLarge level={2}>About</HeadingLarge>
              <p className="text-slate-600">
                Hello there! I am Grigory, an audio producer providing technical audio support for film crews and musicians. My goal is to eliminate any technical audio difficulties that can stand in the way of your creativity, as well as provide great sound for the stories that you aim to share.
              </p>
              <p className="text-slate-600">
                I hold a Bachelor’s degree in Audio Production from the University of Hertfordshire. I also studied audio and music production at SAE Institute Belgrade (2023–2025), Moscow Music School (2020–2023), and completed the Art of Mixing course through Berklee Online.
              </p>
              <p className='text-slate-600'>
                Outside of work, I write music, play D&D, and collect video games.
              </p>
            </div>
            <div className="flex min-w-72 max-w-92">
              <Image src="/assets/grigory/img/about.png" alt="Grigory Gushcha" className="rounded-lg w-full object-cover" />
            </div>
          </div>
        </div>
      </Block>

      <Block separatorVariant={1}>
        <span id="film_audio_post_mixing" className='absolute top-[4px] lg:top-[-80px]' />
        {/* Skills & Tools Section */}
        <HeadingLarge level={2} className='px-14 sm:px-0'>Film Audio Post/Mixing</HeadingLarge>
        <Image src="/assets/grigory/img/v4_86.png" alt="Studio Session" className="rounded-lg w-full max-w-2xl h-80 object-cover" />
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-1">Skills</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Studio Recording, Noise Reduction, Pitch Correction and vocal editing</li>
              <li>Gain staging, Vocal and instrumental processing, Mastering</li>
              <li>Synchronisation, dialogue editing, sound restoration, sound design</li>
              <li>Foley, mixing in stereo and surround (5.1) systems</li>
              <li>Managing a production team</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-1">Tools</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Pro Tools, Ableton Live, Logic Pro, Audacity, Izotope Rx, Melodyne, Final Cut</li>
            </ul>
          </div>
        </div>
        <Heading level={4}>Music</Heading>
        <p>If music is needed I work directly with sound designers and composers, so you don&apos;t have</p>
      </Block>
      <Block separatorVariant={2}>
        <span id="location_sound" className='absolute top-[4px] lg:top-[-80px]' />
        <HeadingLarge level={2}>Location Sound</HeadingLarge>
        <div>

          <Heading level={4}>Location</Heading>
          Currently in Belgrade, Serbia. Ready to travel for bigger projects.
          <Heading level={4}>Skills</Heading>
          Production Mixer, Boom Operator, Lavalier Recording, Production assistant
        </div>
        <Image src="/assets/grigory/img/v4_87.jpg" alt="Recording Room" className="rounded-lg w-full max-w-lg h-80 object-cover" />

        <HeadingLarge level={3} displayLevel={2} className="mb-8">Equipment</HeadingLarge>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <img src="/assets/grigory/img/v1_873.png" alt="Recorder Icon" className="w-8 h-8" />
              <h4 className="text-lg font-semibold">Recorder</h4>
            </div>
            <p className="text-gray-600">Zoom F6</p>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-2">
              <img src="/assets/grigory/img/v1_882.png" alt="Shotgun Microphone Icon" className="w-8 h-8" />
              <h4 className="text-lg font-semibold">Shotgun Microphone</h4>
            </div>
            <p className="text-gray-600">Rode NTG-3, Rode Blimp</p>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-2">
              <img src="/assets/grigory/img/v1_890.png" alt="Lavalier Microphone Icon" className="w-8 h-8" />
              <h4 className="text-lg font-semibold">Lavalier Microphone</h4>
            </div>
            <p className="text-gray-600">DPA 4060</p>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-2">
              <img src="/assets/grigory/img/v35_3.png" alt="Software Icon" className="w-8 h-8" />
              <h4 className="text-lg font-semibold">Software</h4>
            </div>
            <p className="text-gray-600">Pro Tools, Izotope Rx, Ableton, Final Cut</p>
          </div>
        </div>
      </Block>
      {/* Highlight Section with Banner Image */}
      <Block>
        <span id="music_mixing" className='absolute top-[4px] lg:top-[-80px]' />
        <HeadingLarge level={2} className='px-12 sm:px-0'>Music Mixing/Mastering</HeadingLarge>
        <div className="flex justify-center">
          <Image src="/assets/grigory/img/v35_41.png" alt="Mixing Demo Reel Banner" className="rounded-lg w-full max-w-4xl h-48 object-cover shadow-lg" />
        </div>
        <Heading level={2}>Mixing Demo Reel</Heading>
        <div>
          <ul>
            <li>
              <Heading level={4}>Skills</Heading>
              <p>
                Studio Recording, Noise Reduction, Pitch Correction and vocal editing, Gain staging, Vocal and instrumental processing, Mastering.
              </p>
            </li>
            <li>
              <Heading level={4}>Tools</Heading>
              <p>
                Studio Recording, Noise Reduction, Pitch Correction and vocal editing, Gain staging, Vocal and instrumental processing, Mastering.
              </p>
            </li>
            <li>
              <Heading level={4}>Anyting else?</Heading>
              <p>
                I also have experience in podcast mixina. livel audio engineering, songwriting and production, so don&apos;t hesitate to contact me for any other requests connected with audio.
              </p>
            </li>
            <li>
              <p>
                <button>Contact</button> <button>More Of my work</button>
              </p>
            </li>
          </ul>
        </div>
        <Image src="/assets/grigory/img/v4_20.png" alt="Mixing Console" className="rounded-lg w-full max-w-xl h-80 object-cover" />
      </Block>
      
      
      <section className="relative">
        <span id="contacts" className='absolute top-[4px] lg:top-[-80px]' />
        <HeadingLarge level={2} className="mb-8">Contacts</HeadingLarge>
        <div>
          <p className="text-lg font-semibold">+23123123123</p>
          <p className="text-lg font-semibold">skjdalkdja@gmail.com</p>
        </div>
        <div className="flex gap-4">
          <SocialIcon className="filter grayscale transition duration-300 ease-in-out hover:grayscale-0 hover:scale-105" url="https://facebook.com" />
          <SocialIcon className="filter grayscale transition duration-300 ease-in-out hover:grayscale-0 hover:scale-105" url="https://linkedin.com" />
          <SocialIcon className="filter grayscale transition duration-300 ease-in-out hover:grayscale-0 hover:scale-105" url="https://youtube.com" />
          <SocialIcon className="filter grayscale transition duration-300 ease-in-out hover:grayscale-0 hover:scale-105" url="https://instagram.com" />
        </div>
      </section>

      <section>
        <div>Grigory Gushcha Portfolio site</div>
        <div>
          <Heading level={4}>Services</Heading>
          <span className="v1_940">Film Audio Post/Mixing</span>
          <span className="v1_941">Location Sound</span>
          <span className="v1_942">Music Mixing/Mastering</span>
        </div>
        <div>
          <Heading level={4}>More about me</Heading>
          <span className="v1_945">My music</span>
          <span className="v1_946">My Youtube Channel</span>
          <span className="v1_947">The Mass Conceptual EP</span>
        </div>
        <div>
          <Heading level={4}>More of my work</Heading>
          <span className="v1_950">Podcast KSJP</span>
          <span className="v1_951">Laladevochka - Chasing Dreams</span>
          <span className="v1_952">Home</span>
        </div>
      </section>
    </div>
  );
};

export default Grigory;

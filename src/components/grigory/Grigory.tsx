'use server'
import React from 'react'
import Navbar from '@/components/grigory/navbar/Navbar'
import Block from '@/components/grigory/block/Block'
import Heading from '@/components/shared/heading/Heading'
import HeadingLarge from '@/components/shared/heading/HeadingLarge'
import Image from '@/components/shared/image/Image'
import { SocialIcon } from 'react-social-icons'
import Skill from '@/components/grigory/skillList/Skill'
import SkillList from '@/components/grigory/skillList/SkillList'

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
        <HeadingLarge level={2} className='px-14 sm:px-0'>Film Audio Post/Mixing</HeadingLarge>
        <Image 
          src="/assets/grigory/img/v4_86.png" 
          alt="Studio Session" 
          className="rounded-lg w-full md:max-w-[50%] h-80 object-cover mx-auto mb-5" 
        />
        <SkillList className='mx-auto w-full md:max-w-[50%]'>
          <Skill heading='Skills'>
            Synchronisation, dialogue editing, noise reduction,sound restoration, sound design, vocal processing, Foley, mixing in stereo and surround (5.1) systems, managing a production team
          </Skill>
          <Skill heading='Tools'>
            Pro Tools, Ableton Live, Logic Pro, Izotope RX, Audacity, Final Cut
          </Skill>
          <Skill heading='Music'>
            If music is needed I work directly with sound designers and composers, so you don’t have to find them.
          </Skill>
        </SkillList>
      </Block>

      <Block>
        <span id="location_sound" className='absolute top-[4px] lg:top-[-80px]' />
        <HeadingLarge level={2}>Location Sound</HeadingLarge>
        <div className='flex flex-col md:flex-row gap-8 items-center'>
          <SkillList className='md:max-w-[50%]'>
            <Skill heading='Location'>
              Currently in Belgrade, Serbia. Ready to travel for bigger projects.
            </Skill>
            <Skill heading='Skills'>
              Production Mixer, Boom Operator, Lavalier Recording, Production assistant
            </Skill>
          </SkillList>
          <Image 
            src="/assets/grigory/img/v4_87.jpg" 
            alt="Recording Room" 
            className="rounded-lg w-full md:max-w-[50%] h-80 object-cover mx-auto mb-5" 
          />
        </div>
      </Block>
      <Block separatorVariant={2}>
        <HeadingLarge level={3} displayLevel={2}>Equipment</HeadingLarge>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:h-40">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <img src="/assets/grigory/img/v1_873.png" alt="Recorder Icon" className="w-8 h-8" />
              <h4 className="text-lg font-semibold">Recorder</h4>
            </div>
            <p className="text-slate-600">Zoom F6</p>
          </div>
          <div className='md:self-end'>
            <div className="flex items-center gap-4 mb-2">
              <img src="/assets/grigory/img/v1_882.png" alt="Shotgun Microphone Icon" className="w-8 h-8" />
              <h4 className="text-lg font-semibold">Shotgun Microphone</h4>
            </div>
            <p className="text-slate-600">Rode NTG-3, Rode Blimp</p>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-2">
              <img src="/assets/grigory/img/v1_890.jpeg" alt="Lavalier Microphone Icon" className="w-8 h-8" />
              <h4 className="text-lg font-semibold">Lavalier Microphone</h4>
            </div>
            <p className="text-slate-600">DPA 4060</p>
          </div>
          <div className='md:self-end'>
            <div className="flex items-center gap-4 mb-2">
              <img src="/assets/grigory/img/v35_3.png" alt="Software Icon" className="w-8 h-8" />
              <h4 className="text-lg font-semibold">Software</h4>
            </div>
            <p className="text-slate-600">Pro Tools, Izotope Rx, Ableton, Final Cut</p>
          </div>
        </div>
      </Block>
      <Block>
        <span id="music_mixing" className='absolute top-[4px] lg:top-[-80px]' />
        <HeadingLarge level={2} className='px-12 sm:px-0'>Music Mixing/Mastering</HeadingLarge>
        <div className="flex justify-center mb-5">
          <Image src="/assets/grigory/img/v35_41.png" alt="Mixing Demo Reel Banner" className="rounded-lg w-full max-w-4xl h-48 object-cover shadow-lg" />
        </div>
        <Heading level={2}>Mixing Demo Reel</Heading>
        <div className='flex flex-col md:flex-row gap-8 items-center mb-5'>
          <SkillList className='mx-auto w-full md:max-w-[50%]'>
            <Skill heading='Skills'>
              Studio Recording, Noise Reduction, Pitch Correction and vocal editing, Gain staging, Vocal and instrumental processing, Mastering.
            </Skill>
            <Skill heading='Tools'>
              Pro Tools, Ableton Live, Logic Pro, Audacity, Izotope Rx, Melodyne
            </Skill>
            <Skill heading='Anything else?'>
              I also have experience in podcast mixing, live audio engineering, songwriting and production, so don’t hesitate to contact me for any other requests connected with audio.
            </Skill>
          </SkillList>
          <Image 
            src="/assets/grigory/img/v4_20.png" 
            alt="Mixing Console" 
            className="rounded-lg w-full md:max-w-[50%] h-80 object-cover mx-auto" 
          />
        </div>
      </Block>
      
      <div className='bg-[#EEE] pt-5 pb-8'>
        <Block>
          <span id="contacts" className='absolute top-[4px] lg:top-[-80px]' />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex md:w-full justify-self-center sm:justify-self-start col-span-full lg:col-span-1">
              <HeadingLarge className="pt-4 lg:pt-8 " level={2}>Contacts</HeadingLarge>
            </div>
            <div className="py-4">
              <div className="flex flex-col justify-center h-full">
                <p className="text-lg font-semibold">+23123123123</p>
                <p className="text-lg font-semibold">skjdalkdja@gmail.com</p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-8 lg:justify-self-end">
              <SocialIcon className="filter grayscale transition duration-300 ease-in-out hover:grayscale-0 hover:scale-105" url="https://facebook.com" />
              <SocialIcon className="filter grayscale transition duration-300 ease-in-out hover:grayscale-0 hover:scale-105" url="https://linkedin.com" />
              <SocialIcon className="filter grayscale transition duration-300 ease-in-out hover:grayscale-0 hover:scale-105" url="https://youtube.com" />
              <SocialIcon className="filter grayscale transition duration-300 ease-in-out hover:grayscale-0 hover:scale-105" url="https://instagram.com" />
            </div>
          </div>
        </Block>
      </div>
      <Block className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[3fr_2fr_2fr_2fr] gap-8">
        <Heading level={3} className='col-span-full lg:col-span-1'>Grigory Gushcha Portfolio&nbsp;Site</Heading>
        <div>
          <Heading level={4}>Services</Heading>
          <div className='flex flex-col text-center sm:text-left sm:gap-2'>
            <a href="#film_audio_post_mixing">Film Audio Post/Mixing</a>
            <a href="#location_sound">Location Sound</a>
            <a href="#music_mixing">Music Mixing/Mastering</a>
          </div>
        </div>
        <div>
          <Heading level={4}>More about me</Heading>
          <div className='flex flex-col text-center sm:text-left sm:gap-2'>
            <a href="#">My music</a>
            <a href="#">My Youtube Channel</a>
            <a href="#">The Mass Conceptual EP</a>
          </div>
        </div>
        <div>
          <Heading level={4}>More of my work</Heading>
          <div className='flex flex-col text-center sm:text-left sm:gap-2'>
            <a href="#">Podcast KSJP</a>
            <a href="#">Laladevochka - Chasing Dreams</a>
            <a href="#">Home</a>
          </div>
        </div>
      </Block>
    </div>
  );
};

export default Grigory;

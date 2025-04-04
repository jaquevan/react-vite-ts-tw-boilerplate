import { GlareCard } from '../components/ui/glare-card';
import Monkey from '../../src/assets/images/monkey.jpg';

function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center h-screen p-4 sm:p-8">
        <div className="flex items-center justify-center text-center rounded-lg text-3xl font-bold p-4 bg-green-400 w-full sm:w-2/3 lg:w-1/2">
          React - Vite - TS - TailwindCSS - Prettier
        </div>

        <div className="flex items-center justify-center text-center rounded-lg text-4xl font-bold p-4 bg-green-300 w-full sm:w-2/3 lg:w-1/2">
          Boilerplate by Evan Jaquez
        </div>

        <div>
          <div className="items-center">
            <GlareCard className="flex flex-col items-center justify-center">
              <img
                className="h-full w-full absolute inset-0 object-cover"
                src={Monkey}
                alt="pfp"
              />
            </GlareCard>

            <p className="text-center py-4">Hover Over Me</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-8 text-white animate-fade-in">
      {/* Enhanced Hero Section */}
      <div className="relative h-[320px] w-full rounded-3xl bg-hero bg-cover bg-center overflow-hidden">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-1/80 via-dark-2/60 to-transparent" />
        
        {/* Content with better positioning and styling */}
        <div className="relative z-10 flex h-full flex-col justify-between max-md:px-6 max-md:py-8 lg:p-12">
          {/* Upcoming meeting badge */}
          <div className="flex justify-center">
            <div className="glassmorphism-card px-6 py-3 rounded-full border border-white/20">
              <h2 className="text-base font-semibold text-white text-center">
                Upcoming Meeting at: 12:30 PM
              </h2>
            </div>
          </div>
          
          {/* Time and date with enhanced typography */}
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-extrabold lg:text-7xl text-white drop-shadow-lg">
              {time}
            </h1>
            <p className="text-xl font-medium text-sky-1 lg:text-2xl drop-shadow-md">
              {date}
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
        <div className="absolute bottom-4 left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
      </div>

      {/* Meeting Type List with animation */}
      <div className="animate-slide-up">
        <MeetingTypeList />
      </div>
    </section>
  );
};

export default Home;

export const VideoPlayer = ({ src }: { src: string | undefined }) => {
  if (!src) return null;

  return (
    <div className="my-16">
      <h3 className="text-2xl font-bold text-foreground mb-8">System Demonstration</h3>
      <div className="relative rounded-2xl overflow-hidden border border-muted-foreground/20 shadow-xl bg-muted/20 aspect-video">
        <video 
          src={src} 
          controls 
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-contain"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

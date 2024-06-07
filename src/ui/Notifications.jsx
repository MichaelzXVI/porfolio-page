import Card from '../ui/Card';
import Stickers from '../ui services/Stickers';

export default function Notifications() {
  return (
    <div>
      <div className="z-[9999] flex  items-center justify-center">
        <Card
          className="animate-fade-up animate-twice animate-duration-[900ms] animate-ease-in-out animate-alternate animate-fill-forwards fixed bottom-3 flex items-center space-x-4 rounded-lg border border-slate-800 bg-slate-50
        bg-opacity-95 px-10"
        >
          <span className="pt-3 text-xl">Email copied to clipboard</span>
          <Stickers className="w-14" type="thumbup" />
        </Card>
      </div>
    </div>
  );
}

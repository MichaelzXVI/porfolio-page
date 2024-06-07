import { useToggle } from '../context/ToggleContext';

export default function LanguageMode() {
  const { toggleLanguage, onLanguage } = useToggle();
  return (
    <div>
      <button
        onClick={onLanguage}
        className="font-languagefont text-bold mt-4 text-2xl sm:mt-1"
      >
        {toggleLanguage ? 'EN' : 'HE'}
      </button>
    </div>
  );
}

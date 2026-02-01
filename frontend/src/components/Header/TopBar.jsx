export default function TopBar() {
  return (
    <div className="bg-[#222] h-10 hidden lg:block">
      <div className="container h-full flex-sb-m">
        <div className="text-[#b2b2b2] text-xs">
          Free shipping for standard order over $100
        </div>

        <div className="flex h-full">
          <a
            href="#"
            className="flex-c-m trans-04 px-6 text-[#b2b2b2] text-xs border-r border-l border-white/30 hover:text-primary"
          >
            Help & FAQs
          </a>
          <a
            href="#"
            className="flex-c-m trans-04 px-6 text-[#b2b2b2] text-xs border-r border-white/30 hover:text-primary"
          >
            My Account
          </a>
          <a
            href="#"
            className="flex-c-m trans-04 px-6 text-[#b2b2b2] text-xs border-r border-white/30 hover:text-primary"
          >
            EN
          </a>
          <a
            href="#"
            className="flex-c-m trans-04 px-6 text-[#b2b2b2] text-xs border-r border-white/30 hover:text-primary"
          >
            USD
          </a>
        </div>
      </div>
    </div>
  );
}

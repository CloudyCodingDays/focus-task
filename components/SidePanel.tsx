interface SidePanelProps {
  children: React.ReactNode;
}
const SidePanel: React.FC<SidePanelProps> = ({ children }) => {
  return (
    <div className="flex h-full">
      <div className="bg-neutral-500 box- h-screen md:flex hidden">
        Side Panel
      </div>
      <main className="h-full flex-1 overflow-y-auto">{children}</main>
    </div>
  );
};

export default SidePanel;

import UserProfile1 from "../Components/profile";
import { CardDefault } from "../Components/Card";

export const HomePage = () => {
  return (
    <div className="HomePage p-6 space-y-6">
      {/* User Profile Section */}
      <div className="bg-white p-4 rounded shadow">
        <UserProfile1 />
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
      </div>
    </div>
  );
};

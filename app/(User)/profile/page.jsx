import MyProfile from "@/components/Profile/MyProfile";
import SideBar from "@/components/Profile/SideBar";

const profile = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center gap-10 mt-10">
      <SideBar />
      <MyProfile />
    </div>
  );
};

export default profile;

import ProfileImage from "./ProfileImage";
import ProfileSkills from "./skills/ProfileSkills";
import Separator from "../Separator";

const Profile = () => {
    return (
        <section
            id="profile"
            className="col-span-12 lg:col-span-3 block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
            <ProfileImage />
            <Separator />
            <ProfileSkills />
        </section>
    );
}

export default Profile;

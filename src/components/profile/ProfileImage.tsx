
const ProfileImage = () => {
    return (
        <div className="flex flex-col items-center">
            <img src="/santiago_coggiola.jpg"
                 className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" alt="Profile image"/>
            <h1 className="text-xl font-bold">Santiago Coggiola</h1>
            <p className="text-gray-700">Fullstack Developer</p>
            <a className="text-gray-700 hover:text-orange-600" aria-label="Visit Santiago Coggiola LinkedIn" href="https://www.linkedin.com/in/santiago-coggiola/"
               target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
                    <path fill="currentColor"
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                    </path>
                </svg>
            </a>
        </div>
    );
}

export default ProfileImage;

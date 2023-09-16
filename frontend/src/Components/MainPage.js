import SidebarSearchField from "./Sidebar";
import GoogleMapComponent from "./GoogleMapComponent";

const MainPage = () => {
  return (
    <div className="d-flex bg-dark align-items-center">
      <div className="w-25">
        <SidebarSearchField />
      </div>
      <div className="w-75">
        <GoogleMapComponent />
      </div>
    </div>
  )
}

export default MainPage;
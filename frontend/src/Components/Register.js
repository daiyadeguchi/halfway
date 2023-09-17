const Registar = () => {
  return (
    <div className="registar d-flex flex-fill align-items-center justify-content-center bg-dark">
      <form>
        <div className="flex-row justify-content-center mb-3">
          <input type="text" className="rounded" placeholder="Enter your username"/>
        </div>
        <div className="flex-row justify-content-center mb-3">
          <input type="text" className="rounded" placeholder="Enter your location"/>
        </div>
        <div className="flex-row justify-content-center">
          <input type="submit" value="Registar" className="rounded" />
        </div>
      </form>
    </div>
  )
}

export default Registar;
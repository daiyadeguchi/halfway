const Registar = () => {
  return (
    <div className="bg-dark">
      <form>
        <a className="text-white">Name:</a>
        <div className="row align-items-center justify-content-center mb-3">
          <input type="text" className="col-md-8 col-sm-8 rounded" />
        </div>
        <a className="text-white">Location:</a>
        <div className="row align-items-center justify-content-center mb-3">
          <input type="text" className="col-md-8 col-sm-8 rounded" />
        </div>
        <div className="row align-items-center justify-content-center">
          <input type="submit" value="Registar" className="col-md-6 col-sm-6 rounded" />
        </div>
      </form>
    </div>
  )
}

export default Registar;
import Link from "next/link";

export const Nav = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          ></a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <Link href="/" className="nav-link px-2 text-white">
              Tareas{" "}
            </Link>

            <li>
              <Link href="/nuevo" className="nav-link px-2 text-white">
                Nueva tarea
              </Link>
            </li>
          </ul>

          {/* <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Login</button>
              <button type="button" className="btn btn-warning">Sign-up</button>
            </div> */}
        </div>
      </div>
    </header>
  );
};

import "./homepage.css";

export function HomePage() {
  return (
    <>
      <title>Dove App</title>

      <div className="todo-container">
        <div className="Img-container">
          <button>
            <div>Menu</div>
            <img src="/images/navigation-button.svg" alt="" />
          </button>
        </div>

        <div className="Date-con">
          <div className="Today">Today</div>
          <div className="Date">5</div>
        </div>
      </div>
    </>
  );
}

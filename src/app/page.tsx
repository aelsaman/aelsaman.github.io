import Image from 'next/image';

export default function Home() {
  return (
    <div className="wrapper">
      <header>
        <div className="logo-container">
          <Image
            width={100}
            height={100}
            className="logo"
            src="/images/github-mark-120px-plus.png"
            alt="github pages logo"
          />
        </div>

        <div className="author-container">
          <h1 style={{fontWeight: '600'}}>Alaa ElSaman</h1>
        </div>

        <div className="tagline-container">
          <p>Software Engineer</p>
        </div>
      </header>

      <main className="content">
        <h2 style={{fontWeight: '500'}}>About Me</h2>
        <p>
          Passionate cloud native software engineer with 8+ years of web and enterprise software development. Eager to
          work with collaborative peers and always working hard to keep up with the latest and greatest in tech :-D{' '}
        </p>
        <hr />

        <ul className="fa-ul main-list">
          <li className="main-list-item">
            <span className="fa fa-github fa-lg main-list-item-icon"></span>
            <a href="https://www.github.com/aelsaman">GitHub Profile</a>
          </li>
          <li className="main-list-item">
            <span className="fa fa-user fa-lg main-list-item-icon"></span>
            <a href="https://www.linkedin.com/in/aelsaman/">Linkedin</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

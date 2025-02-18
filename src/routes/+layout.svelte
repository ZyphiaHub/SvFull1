<script>
    import { page } from '$app/stores';
  
    const menuItems = [
      { name: 'Kezdőlap', path: '/' },
      { name: 'Események', path: '/events' },
      { name: 'Művek', path: '/artpieces' },
      { name: 'Bejelentkezés adminisztrátoroknak', path: '/login' }
    ];
  </script>
  
  <nav>
    <ul>
      {#each menuItems as item}
        <li>
          <a href={item.path} class:active={$page.url.pathname === item.path}>
            {item.name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  
  <!-- Banner kép -->
<div class="banner">
    <img src="/banner.jpg" alt="Banner kép" />
    <div class="banner-text">
        <h1>DuPlant Akadémia</h1>
        <p>Üdvözöllek Sohaország legnevesebb művészeti akadémiáján!</p>
      </div>
  </div>

  <slot />
  
  <style>
    nav {
      background-color: #333;
      padding: 2rem;
    }
  
    ul {
      list-style: none;
      display: flex;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }
  
    li {
      margin: 0;
    }
  
    a {
      color: rgb(243, 242, 226);
      text-decoration: none;
      font-weight: bold;
    }
  
    .banner {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
  }

  .banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
.banner-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

    a:hover {
      text-decoration: underline;
    }
  
    .active {
      color: #ff005d;
    }
  </style>
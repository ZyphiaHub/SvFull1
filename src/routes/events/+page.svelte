<script>
    export let data; // A szerverről kapott adatok, load tölti fel
    import { enhance } from "$app/forms"; //insert formhoz kell
    let message = ""; //hibaüzenetet kiírjuk vele

    let today = new Date().toISOString().split("T")[0]; // Mai dátum YYYY-MM-DD formátumban

    // Események csoportosítása
    let upcomingEvents = data.events.filter(event => event.date >= today);
    let pastEvents = data.events.filter(event => event.date < today);
</script>

<h1>Események</h1>
<!-- Jövőbeli események -->
<h2>Jövőbeli események</h2>
{#if upcomingEvents.length > 0}
    <ul>
        {#each upcomingEvents as event}
            <li>
                <strong>{event.name}</strong> - {event.date} 
                <br>
                Helyszín: {event.location} 
            </li>
        {/each}
    </ul>
{:else}
    <p>Nincsenek közelgő események.</p>
{/if}
<br>
<!-- Új esemény hozzáadása -->
<form method="post" use:enhance>
    <h2>Új esemény hozzáadása</h2>
    <label>
        Név:
        <input type="text" name="name" required>
    </label>
    <label>
        Dátum:
        <input type="date" name="date" required>
    </label>
    <label>
        Helyszín:
        <input type="text" name="location" required>
    </label>
    
    <button formaction="?/insertEvent" formmethod="post">Hozzáadás</button>
</form>

<!-- Üzenet megjelenítése -->
{#if message}
    <p>{message}</p>
{/if}
<br>
<!-- Korábbi események -->
<h2>Korábbi eseményeink</h2>
{#if pastEvents.length > 0}
    <ul>
        {#each pastEvents as event}
            <li>
                <strong>{event.name}</strong> - {event.date} 
                <br>
                Helyszín: {event.location} 
            </li>
        {/each}
    </ul>
{:else}
    <p>Még nincsenek múltbeli események.</p>
{/if}


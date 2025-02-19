<script>
    export let data; // A szerverről kapott adatok
    import { enhance } from "$app/forms"; //insert formhoz kell
    let message = ""; //hibaüzenetet kiírjuk vele
</script>


<h1>Volt és jelenlegi diákjaink műalkotásai</h1>
<p>Fogadják szeretettel diákjaink legjobb műveit. A képek megtekinthetők különböző rendezvényeinken. </p>
<p>Eredeti művek vagy vászonra nyomott másolataik megvásárolhatóak a helyszínen. Magán látogatás is lehetséges 
    csoportoknak. Ehhez a kapcsolatot kérjük vegye fel irodánkkal.</p> 
<br>
<br>
    <!-- Műtárgyak listája -->
{#if data.artPieces.length > 0}
<ul>
    {#each data.artPieces as piece}
        <li>
            <strong>{piece.title}</strong> - {piece.artist} ({piece.year})
            <br/>
            Állapot: {piece.status}
        </li>
    {/each}
</ul>
{:else}
<p>Nincsenek műtárgyak az adatbázisban.</p>
{/if}
<br>
    <!-- Új műtárgy hozzáadása INSERT funkció-->
<form method="post" use:enhance>
    <h2>Új műtárgy hozzáadása</h2>
    <label>
        Cím:
        <input type="text" name="title" required>
    </label>
    <label>
        Művész:
        <input type="text" name="artist" required>
    </label>
    <label>
        Év:
        <input type="number" name="year" required>
    </label>
    <label>
        Állapot:
        <input type="text" name="status" required>
    </label>
    <button formaction="?/insertArtPiece" formmethod="post">Hozzáadás</button>
</form>

<!-- Üzenet megjelenítése -->
{#if message}
    <p>{message}</p>
{/if}


<script>
    export let data; // A szerverről kapott adatok
</script>


<h1>Volt és jelenlegi diákjaink műalkotásai</h1>
<p>Fogadják szeretettel diákjaink legjobb műveit. A képek megtekinthetők különböző rendezvényeinken. </p>
<p>Eredeti művek vagy vászonra nyomott másolataik megvásárolhatóak a helyszínen. Magán látogatás is lehetséges 
    csoportoknak. Ehhez a kapcsolatot kérjük vegye fel irodánkkal.</p> 

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
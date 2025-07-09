export function getDateFormatee() { 
    const now = new Date();
    const datePart = now.toLocaleDateString('fr-FR', {day: '2-digit',month: '2-digit',year: 'numeric'
    });

    const timePart = now.toLocaleTimeString('fr-FR', {hour: '2-digit',minute: '2-digit',hourCycle: 'h23'
    }).replace(':', 'h'); 

    return `${datePart} à ${timePart}`;
}

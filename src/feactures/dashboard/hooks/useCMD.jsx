import { useToast } from "../../../shared/hooks/useToast";

export function useCDM() {
  const { notify } = useToast()
  const cmdAddUser = (tickets) => {
    const { server, profile, codes, uptime } = tickets
    const newUptime = uptime || '01:00:00'
    const $textarea = document.createElement("textarea");
    $textarea.textContent = "/ip hotspot user \n";
    codes.forEach(({ code }) => {
      $textarea.textContent += `add name="${code}" server="${server}" profile="${profile}" limit-uptime="${newUptime}" \n`;
    });

    var content = $textarea.textContent;
    navigator.clipboard
      .writeText(content)
      .then(() => {
        console.log(
          "Se ah copiado el codigo de la terminal mikrotik en el portapapeles sadisfactoriamente!"
        );

        notify("Se ah copiado el codigo de la terminal mikrotik en el portapapeles sadisfactoriamente!")
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };

const cmdDeleteUsers = (tickets) => {
  const { codes } = tickets;
  const $textarea = document.createElement("textarea");
  $textarea.textContent = "/ip hotspot user\n";

  codes.forEach(({ code }) => {
    $textarea.textContent += `remove [find where name="${code}"]\n`;
  });

  const content = $textarea.textContent;

  navigator.clipboard
    .writeText(content)
    .then(() => {
      console.log("¡Se ha copiado el código para eliminar usuarios al portapapeles!");
      notify("¡Código para eliminar usuarios copiado exitosamente al portapapeles!");
    })
    .catch((err) => {
      console.log("Algo salió mal al copiar al portapapeles", err);
    });
};


  return { cmdAddUser, cmdDeleteUsers };
}

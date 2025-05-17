import { useToast } from "../../../shared/hooks/useToast";

export function useCDM() {
    const {notify} = useToast()
  const copyCMD = (tickets) => {
    const {server, profile, codes, uptime} = tickets
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

  return { copyCMD };
}

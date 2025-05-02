import React from "react";

type SubmitButtonProps = {
  label?: string;
  isLoading?: boolean;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({
  label = "Enviar",
  isLoading = false,
}: SubmitButtonProps) => {
  return (
    <button type="submit" className="btn btn-primary bg-amber-400" disabled={isLoading}>
      {isLoading ? "Cargando..." : label}
    </button>
  );
};

export default SubmitButton;
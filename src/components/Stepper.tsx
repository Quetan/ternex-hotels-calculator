import React, { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";

const steps = [
	{
		component: <Step1 />,
	},
	{
		component: <Step2 />,
	},
	{
		component: <Step3 />,
	},
] as const;

const Stepper: FC = () => {
	const [currentStep, setCurrentStep] = useState(0);

	const handleNextStep = () => {
		setCurrentStep((prevStep) => prevStep + 1);
	};

	const handlePrevStep = () => {
		setCurrentStep((prevStep) => prevStep - 1);
	};

	return (
		<div className="flex flex-col justify-between items-center gap-4">
			<div className="flex items-center">
				{steps.map((_step, index) => (
					<React.Fragment key={index}>
						<div
							className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
								index === currentStep
									? "bg-primary text-primary-foreground"
									: index < currentStep
									? "bg-green-500 text-green-100"
									: "bg-gray-200 text-gray-600"
							}`}
						>
							{index + 1}
						</div>
						{index < steps.length - 1 && (
							<Separator
								decorative
								orientation="horizontal"
								className="w-8 mx-2"
							/>
						)}
					</React.Fragment>
				))}
			</div>

			{steps[currentStep].component}

			<div className="mt-4 flex space-x-2">
				<Button
					variant="outline"
					disabled={currentStep === 0}
					onClick={handlePrevStep}
					className="hover:text-white hover:bg-accent/50"
				>
					Назад
				</Button>
				{currentStep !== steps.length - 1 && (
					<Button
						variant="default"
						onClick={handleNextStep}
						className="bg-accent hover:bg-accent/50"
					>
						Далее
					</Button>
				)}
			</div>
		</div>
	);
};

export default Stepper;

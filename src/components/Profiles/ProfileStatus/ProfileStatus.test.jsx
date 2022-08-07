import { render, screen, fireEvent} from "@testing-library/react";
import ProfileStatus from "./ProfileStatus"


describe('profileStatus',()=>{
	it("props text is  render",()=>{
		const {getByText} = render(<ProfileStatus status="text"/>)
		expect(getByText(/text/)).toBeInTheDocument();
	})
})
describe('switch switched',()=>{
	it("switch switched",()=>{
		const {getByRole,getByText} = render(<ProfileStatus status="text"/>)
		const text = getByText(/text/)
		fireEvent.dblClick(text);
		expect(getByRole('input')).toBeInTheDocument();
	})
})
import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./PorfileStatus";

describe("ProfileStatus component", () => {
    //тест то что приходит в пропсах
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="hello world" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("hello world");
    });
    //проверка то что в данной компоненте создался тег span
    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="hello world" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    //проверка то что в разметке отсутствует тег input
    test("after creation input should not be displayed", () => {
        const component = create(<ProfileStatus status="hello world" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });
    //проверка значения в span в первом элементе span в данном примере он один но может быть несколько
    test("after creation span should contains correct status", () => {
        const component = create(<ProfileStatus status="hello world" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("hello world");
    });
    //провека на то что после двойного клика по span появился input со значением value
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="hello world" />);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe("hello world");
    });
    //тест на вызов callback function
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="hello world" updateUserStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.onDeactivateEditStatus();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
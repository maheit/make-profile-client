import "react-redux";
import {
    MapStateToProps,
    MapStateToPropsFactory,
    MapDispatchToProps,
    MapDispatchToPropsFactory,
    MergeProps,
} from "react-redux";
import { Options } from "html-webpack-plugin";

declare module "react-redux" {
    export function connect(
        mapStateToProps?:
            | MapStateToProps<any, any>
            | MapStateToPropsFactory<any, any>,
        mapDispatchToProps?:
            | MapDispatchToProps<any, any>
            | MapDispatchToPropsFactory<any, any>,
        mergeProps?: MergeProps<any, any, any>,
        options?: Options
    ): ClassDecorator;
}

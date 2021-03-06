// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Manages the lifecycle of a Docker container.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as docker from "@pulumi/docker";
 * 
 * // Find the latest Ubuntu precise image.
 * const ubuntuRemoteImage = new docker.RemoteImage("ubuntu", {});
 * // Start a container
 * const ubuntuContainer = new docker.Container("ubuntu", {
 *     image: ubuntuRemoteImage.latest,
 * });
 * ```
 */
export class Container extends pulumi.CustomResource {
    /**
     * Get an existing Container resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContainerState, opts?: pulumi.CustomResourceOptions): Container {
        return new Container(name, <any>state, { ...opts, id: id });
    }

    /**
     * If true attach to the container after its creation and waits the end of his execution.
     */
    public readonly attach: pulumi.Output<boolean | undefined>;
    /**
     * The network bridge of the container as read from its NetworkSettings.
     */
    public /*out*/ readonly bridge: pulumi.Output<string>;
    /**
     * See Capabilities below for details.
     */
    public readonly capabilities: pulumi.Output<{ adds?: string[], drops?: string[] } | undefined>;
    /**
     * The command to use to start the
     * container. For example, to run `/usr/bin/myprogram -f baz.conf` set the
     * command to be `["/usr/bin/myprogram", "-f", "baz.conf"]`.
     */
    public readonly command: pulumi.Output<string[] | undefined>;
    /**
     * The logs of the container if its execution is done (`attach` must be disabled).
     */
    public /*out*/ readonly containerLogs: pulumi.Output<string>;
    /**
     * A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`.
     */
    public readonly cpuSet: pulumi.Output<string | undefined>;
    /**
     * CPU shares (relative weight) for the container.
     */
    public readonly cpuShares: pulumi.Output<number | undefined>;
    /**
     * If defined will attempt to stop the container before destroying. Container will be destroyed after `n` seconds or on successful stop.
     */
    public readonly destroyGraceSeconds: pulumi.Output<number | undefined>;
    /**
     * See Devices below for details.
     */
    public readonly devices: pulumi.Output<{ containerPath?: string, hostPath: string, permissions?: string }[] | undefined>;
    /**
     * Set of DNS servers.
     */
    public readonly dns: pulumi.Output<string[] | undefined>;
    /**
     * Set of DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options.
     */
    public readonly dnsOpts: pulumi.Output<string[] | undefined>;
    /**
     * Set of DNS search domains that are used when bare unqualified hostnames are used inside of the container.
     */
    public readonly dnsSearches: pulumi.Output<string[] | undefined>;
    /**
     * Domain name of the container.
     */
    public readonly domainname: pulumi.Output<string | undefined>;
    /**
     * The command to use as the
     * Entrypoint for the container. The Entrypoint allows you to configure a
     * container to run as an executable. For example, to run `/usr/bin/myprogram`
     * when starting a container, set the entrypoint to be
     * `["/usr/bin/myprogram"]`.
     */
    public readonly entrypoints: pulumi.Output<string[] | undefined>;
    /**
     * Environment variables to set.
     */
    public readonly envs: pulumi.Output<string[] | undefined>;
    /**
     * The exit code of the container if its execution is done (`must_run` must be disabled).
     */
    public /*out*/ readonly exitCode: pulumi.Output<number>;
    /**
     * *Deprecated:* Use `network_data` instead. The network gateway of the container as read from its
     * NetworkSettings.
     */
    public /*out*/ readonly gateway: pulumi.Output<string>;
    /**
     * See Healthcheck below for details.
     */
    public readonly healthcheck: pulumi.Output<{ interval?: string, retries?: number, startPeriod?: string, tests: string[], timeout?: string } | undefined>;
    /**
     * Hostname to add.
     */
    public readonly hosts: pulumi.Output<{ host: string, ip: string }[] | undefined>;
    /**
     * Hostname of the container.
     */
    public readonly hostname: pulumi.Output<string | undefined>;
    /**
     * The ID of the image to back this container.
     * The easiest way to get this value is to use the `docker_image` resource
     * as is shown in the example above.
     */
    public readonly image: pulumi.Output<string>;
    /**
     * *Deprecated:* Use `network_data` instead. The IP address of the container's first network it.
     */
    public /*out*/ readonly ipAddress: pulumi.Output<string>;
    /**
     * *Deprecated:* Use `network_data` instead. The IP prefix length of the container as read from its
     * NetworkSettings.
     */
    public /*out*/ readonly ipPrefixLength: pulumi.Output<number>;
    /**
     * Key/value pairs to set as labels on the
     * container.
     */
    public readonly labels: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Set of links for link based
     * connectivity between containers that are running on the same host.
     */
    public readonly links: pulumi.Output<string[] | undefined>;
    /**
     * The logging driver to use for the container.
     * Defaults to "json-file".
     */
    public readonly logDriver: pulumi.Output<string | undefined>;
    /**
     * Key/value pairs to use as options for
     * the logging driver.
     */
    public readonly logOpts: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Save the container logs (`attach` must be enabled).
     */
    public readonly logs: pulumi.Output<boolean | undefined>;
    /**
     * The maximum amount of times to an attempt
     * a restart when `restart` is set to "on-failure"
     */
    public readonly maxRetryCount: pulumi.Output<number | undefined>;
    /**
     * The memory limit for the container in MBs.
     */
    public readonly memory: pulumi.Output<number | undefined>;
    /**
     * The total memory limit (memory + swap) for the
     * container in MBs. This setting may compute to `-1` after `terraform apply` if the target host doesn't support memory swap, when that is the case docker will use a soft limitation.
     */
    public readonly memorySwap: pulumi.Output<number | undefined>;
    /**
     * If true, then the Docker container will be
     * kept running. If false, then as long as the container exists, Terraform
     * assumes it is successful.
     */
    public readonly mustRun: pulumi.Output<boolean | undefined>;
    public readonly name: pulumi.Output<string>;
    /**
     * Network aliases of the container for user-defined networks only. *Deprecated:* use `networks_advanced` instead.
     */
    public readonly networkAliases: pulumi.Output<string[] | undefined>;
    /**
     * (Map of a block) The IP addresses of the container on each
     * network. Key are the network names, values are the IP addresses.
     */
    public /*out*/ readonly networkDatas: pulumi.Output<{ gateway: string, ipAddress: string, ipPrefixLength: number, networkName: string }[]>;
    /**
     * Network mode of the container.
     */
    public readonly networkMode: pulumi.Output<string | undefined>;
    /**
     * Id of the networks in which the
     * container is. *Deprecated:* use `networks_advanced` instead.
     */
    public readonly networks: pulumi.Output<string[] | undefined>;
    /**
     * See Networks Advanced below for details. If this block has priority to the deprecated `network_alias` and `network` properties.
     */
    public readonly networksAdvanced: pulumi.Output<{ aliases?: string[], ipv4Address?: string, ipv6Address?: string, name: string }[] | undefined>;
    /**
     * The PID (Process) Namespace mode for the container. Either `container:<name|id>` or `host`.
     */
    public readonly pidMode: pulumi.Output<string | undefined>;
    /**
     * See Ports below for details.
     */
    public readonly ports: pulumi.Output<{ external: number, internal: number, ip?: string, protocol?: string }[] | undefined>;
    /**
     * Run container in privileged mode.
     */
    public readonly privileged: pulumi.Output<boolean | undefined>;
    /**
     * Publish all ports of the container.
     */
    public readonly publishAllPorts: pulumi.Output<boolean | undefined>;
    /**
     * The restart policy for the container. Must be
     * one of "no", "on-failure", "always", "unless-stopped".
     */
    public readonly restart: pulumi.Output<string | undefined>;
    /**
     * If true, then the container will be automatically removed after his execution. Terraform
     * won't check this container after creation.
     */
    public readonly rm: pulumi.Output<boolean | undefined>;
    /**
     * If true, then the Docker container will be
     * started after creation. If false, then the container is only created.
     */
    public readonly start: pulumi.Output<boolean | undefined>;
    /**
     * See Ulimits below for
     * details.
     */
    public readonly ulimits: pulumi.Output<{ hard: number, name: string, soft: number }[] | undefined>;
    /**
     * See File Upload below for details.
     */
    public readonly uploads: pulumi.Output<{ content: string, executable?: boolean, file: string }[] | undefined>;
    /**
     * User used for run the first process. Format is
     * `user` or `user:group` which user and group can be passed literraly or
     * by name.
     */
    public readonly user: pulumi.Output<string | undefined>;
    /**
     * Sets the usernamespace mode for the container when usernamespace remapping option is enabled.
     */
    public readonly usernsMode: pulumi.Output<string | undefined>;
    /**
     * See Volumes below for details.
     */
    public readonly volumes: pulumi.Output<{ containerPath?: string, fromContainer?: string, hostPath?: string, readOnly?: boolean, volumeName?: string }[] | undefined>;

    /**
     * Create a Container resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ContainerArgs | ContainerState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ContainerState = argsOrState as ContainerState | undefined;
            inputs["attach"] = state ? state.attach : undefined;
            inputs["bridge"] = state ? state.bridge : undefined;
            inputs["capabilities"] = state ? state.capabilities : undefined;
            inputs["command"] = state ? state.command : undefined;
            inputs["containerLogs"] = state ? state.containerLogs : undefined;
            inputs["cpuSet"] = state ? state.cpuSet : undefined;
            inputs["cpuShares"] = state ? state.cpuShares : undefined;
            inputs["destroyGraceSeconds"] = state ? state.destroyGraceSeconds : undefined;
            inputs["devices"] = state ? state.devices : undefined;
            inputs["dns"] = state ? state.dns : undefined;
            inputs["dnsOpts"] = state ? state.dnsOpts : undefined;
            inputs["dnsSearches"] = state ? state.dnsSearches : undefined;
            inputs["domainname"] = state ? state.domainname : undefined;
            inputs["entrypoints"] = state ? state.entrypoints : undefined;
            inputs["envs"] = state ? state.envs : undefined;
            inputs["exitCode"] = state ? state.exitCode : undefined;
            inputs["gateway"] = state ? state.gateway : undefined;
            inputs["healthcheck"] = state ? state.healthcheck : undefined;
            inputs["hosts"] = state ? state.hosts : undefined;
            inputs["hostname"] = state ? state.hostname : undefined;
            inputs["image"] = state ? state.image : undefined;
            inputs["ipAddress"] = state ? state.ipAddress : undefined;
            inputs["ipPrefixLength"] = state ? state.ipPrefixLength : undefined;
            inputs["labels"] = state ? state.labels : undefined;
            inputs["links"] = state ? state.links : undefined;
            inputs["logDriver"] = state ? state.logDriver : undefined;
            inputs["logOpts"] = state ? state.logOpts : undefined;
            inputs["logs"] = state ? state.logs : undefined;
            inputs["maxRetryCount"] = state ? state.maxRetryCount : undefined;
            inputs["memory"] = state ? state.memory : undefined;
            inputs["memorySwap"] = state ? state.memorySwap : undefined;
            inputs["mustRun"] = state ? state.mustRun : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["networkAliases"] = state ? state.networkAliases : undefined;
            inputs["networkDatas"] = state ? state.networkDatas : undefined;
            inputs["networkMode"] = state ? state.networkMode : undefined;
            inputs["networks"] = state ? state.networks : undefined;
            inputs["networksAdvanced"] = state ? state.networksAdvanced : undefined;
            inputs["pidMode"] = state ? state.pidMode : undefined;
            inputs["ports"] = state ? state.ports : undefined;
            inputs["privileged"] = state ? state.privileged : undefined;
            inputs["publishAllPorts"] = state ? state.publishAllPorts : undefined;
            inputs["restart"] = state ? state.restart : undefined;
            inputs["rm"] = state ? state.rm : undefined;
            inputs["start"] = state ? state.start : undefined;
            inputs["ulimits"] = state ? state.ulimits : undefined;
            inputs["uploads"] = state ? state.uploads : undefined;
            inputs["user"] = state ? state.user : undefined;
            inputs["usernsMode"] = state ? state.usernsMode : undefined;
            inputs["volumes"] = state ? state.volumes : undefined;
        } else {
            const args = argsOrState as ContainerArgs | undefined;
            if (!args || args.image === undefined) {
                throw new Error("Missing required property 'image'");
            }
            inputs["attach"] = args ? args.attach : undefined;
            inputs["capabilities"] = args ? args.capabilities : undefined;
            inputs["command"] = args ? args.command : undefined;
            inputs["cpuSet"] = args ? args.cpuSet : undefined;
            inputs["cpuShares"] = args ? args.cpuShares : undefined;
            inputs["destroyGraceSeconds"] = args ? args.destroyGraceSeconds : undefined;
            inputs["devices"] = args ? args.devices : undefined;
            inputs["dns"] = args ? args.dns : undefined;
            inputs["dnsOpts"] = args ? args.dnsOpts : undefined;
            inputs["dnsSearches"] = args ? args.dnsSearches : undefined;
            inputs["domainname"] = args ? args.domainname : undefined;
            inputs["entrypoints"] = args ? args.entrypoints : undefined;
            inputs["envs"] = args ? args.envs : undefined;
            inputs["healthcheck"] = args ? args.healthcheck : undefined;
            inputs["hosts"] = args ? args.hosts : undefined;
            inputs["hostname"] = args ? args.hostname : undefined;
            inputs["image"] = args ? args.image : undefined;
            inputs["labels"] = args ? args.labels : undefined;
            inputs["links"] = args ? args.links : undefined;
            inputs["logDriver"] = args ? args.logDriver : undefined;
            inputs["logOpts"] = args ? args.logOpts : undefined;
            inputs["logs"] = args ? args.logs : undefined;
            inputs["maxRetryCount"] = args ? args.maxRetryCount : undefined;
            inputs["memory"] = args ? args.memory : undefined;
            inputs["memorySwap"] = args ? args.memorySwap : undefined;
            inputs["mustRun"] = args ? args.mustRun : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["networkAliases"] = args ? args.networkAliases : undefined;
            inputs["networkMode"] = args ? args.networkMode : undefined;
            inputs["networks"] = args ? args.networks : undefined;
            inputs["networksAdvanced"] = args ? args.networksAdvanced : undefined;
            inputs["pidMode"] = args ? args.pidMode : undefined;
            inputs["ports"] = args ? args.ports : undefined;
            inputs["privileged"] = args ? args.privileged : undefined;
            inputs["publishAllPorts"] = args ? args.publishAllPorts : undefined;
            inputs["restart"] = args ? args.restart : undefined;
            inputs["rm"] = args ? args.rm : undefined;
            inputs["start"] = args ? args.start : undefined;
            inputs["ulimits"] = args ? args.ulimits : undefined;
            inputs["uploads"] = args ? args.uploads : undefined;
            inputs["user"] = args ? args.user : undefined;
            inputs["usernsMode"] = args ? args.usernsMode : undefined;
            inputs["volumes"] = args ? args.volumes : undefined;
            inputs["bridge"] = undefined /*out*/;
            inputs["containerLogs"] = undefined /*out*/;
            inputs["exitCode"] = undefined /*out*/;
            inputs["gateway"] = undefined /*out*/;
            inputs["ipAddress"] = undefined /*out*/;
            inputs["ipPrefixLength"] = undefined /*out*/;
            inputs["networkDatas"] = undefined /*out*/;
        }
        super("docker:index/container:Container", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Container resources.
 */
export interface ContainerState {
    /**
     * If true attach to the container after its creation and waits the end of his execution.
     */
    readonly attach?: pulumi.Input<boolean>;
    /**
     * The network bridge of the container as read from its NetworkSettings.
     */
    readonly bridge?: pulumi.Input<string>;
    /**
     * See Capabilities below for details.
     */
    readonly capabilities?: pulumi.Input<{ adds?: pulumi.Input<pulumi.Input<string>[]>, drops?: pulumi.Input<pulumi.Input<string>[]> }>;
    /**
     * The command to use to start the
     * container. For example, to run `/usr/bin/myprogram -f baz.conf` set the
     * command to be `["/usr/bin/myprogram", "-f", "baz.conf"]`.
     */
    readonly command?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The logs of the container if its execution is done (`attach` must be disabled).
     */
    readonly containerLogs?: pulumi.Input<string>;
    /**
     * A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`.
     */
    readonly cpuSet?: pulumi.Input<string>;
    /**
     * CPU shares (relative weight) for the container.
     */
    readonly cpuShares?: pulumi.Input<number>;
    /**
     * If defined will attempt to stop the container before destroying. Container will be destroyed after `n` seconds or on successful stop.
     */
    readonly destroyGraceSeconds?: pulumi.Input<number>;
    /**
     * See Devices below for details.
     */
    readonly devices?: pulumi.Input<pulumi.Input<{ containerPath?: pulumi.Input<string>, hostPath: pulumi.Input<string>, permissions?: pulumi.Input<string> }>[]>;
    /**
     * Set of DNS servers.
     */
    readonly dns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Set of DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options.
     */
    readonly dnsOpts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Set of DNS search domains that are used when bare unqualified hostnames are used inside of the container.
     */
    readonly dnsSearches?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Domain name of the container.
     */
    readonly domainname?: pulumi.Input<string>;
    /**
     * The command to use as the
     * Entrypoint for the container. The Entrypoint allows you to configure a
     * container to run as an executable. For example, to run `/usr/bin/myprogram`
     * when starting a container, set the entrypoint to be
     * `["/usr/bin/myprogram"]`.
     */
    readonly entrypoints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Environment variables to set.
     */
    readonly envs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The exit code of the container if its execution is done (`must_run` must be disabled).
     */
    readonly exitCode?: pulumi.Input<number>;
    /**
     * *Deprecated:* Use `network_data` instead. The network gateway of the container as read from its
     * NetworkSettings.
     */
    readonly gateway?: pulumi.Input<string>;
    /**
     * See Healthcheck below for details.
     */
    readonly healthcheck?: pulumi.Input<{ interval?: pulumi.Input<string>, retries?: pulumi.Input<number>, startPeriod?: pulumi.Input<string>, tests: pulumi.Input<pulumi.Input<string>[]>, timeout?: pulumi.Input<string> }>;
    /**
     * Hostname to add.
     */
    readonly hosts?: pulumi.Input<pulumi.Input<{ host: pulumi.Input<string>, ip: pulumi.Input<string> }>[]>;
    /**
     * Hostname of the container.
     */
    readonly hostname?: pulumi.Input<string>;
    /**
     * The ID of the image to back this container.
     * The easiest way to get this value is to use the `docker_image` resource
     * as is shown in the example above.
     */
    readonly image?: pulumi.Input<string>;
    /**
     * *Deprecated:* Use `network_data` instead. The IP address of the container's first network it.
     */
    readonly ipAddress?: pulumi.Input<string>;
    /**
     * *Deprecated:* Use `network_data` instead. The IP prefix length of the container as read from its
     * NetworkSettings.
     */
    readonly ipPrefixLength?: pulumi.Input<number>;
    /**
     * Key/value pairs to set as labels on the
     * container.
     */
    readonly labels?: pulumi.Input<{[key: string]: any}>;
    /**
     * Set of links for link based
     * connectivity between containers that are running on the same host.
     */
    readonly links?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The logging driver to use for the container.
     * Defaults to "json-file".
     */
    readonly logDriver?: pulumi.Input<string>;
    /**
     * Key/value pairs to use as options for
     * the logging driver.
     */
    readonly logOpts?: pulumi.Input<{[key: string]: any}>;
    /**
     * Save the container logs (`attach` must be enabled).
     */
    readonly logs?: pulumi.Input<boolean>;
    /**
     * The maximum amount of times to an attempt
     * a restart when `restart` is set to "on-failure"
     */
    readonly maxRetryCount?: pulumi.Input<number>;
    /**
     * The memory limit for the container in MBs.
     */
    readonly memory?: pulumi.Input<number>;
    /**
     * The total memory limit (memory + swap) for the
     * container in MBs. This setting may compute to `-1` after `terraform apply` if the target host doesn't support memory swap, when that is the case docker will use a soft limitation.
     */
    readonly memorySwap?: pulumi.Input<number>;
    /**
     * If true, then the Docker container will be
     * kept running. If false, then as long as the container exists, Terraform
     * assumes it is successful.
     */
    readonly mustRun?: pulumi.Input<boolean>;
    readonly name?: pulumi.Input<string>;
    /**
     * Network aliases of the container for user-defined networks only. *Deprecated:* use `networks_advanced` instead.
     */
    readonly networkAliases?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * (Map of a block) The IP addresses of the container on each
     * network. Key are the network names, values are the IP addresses.
     */
    readonly networkDatas?: pulumi.Input<pulumi.Input<{ gateway?: pulumi.Input<string>, ipAddress?: pulumi.Input<string>, ipPrefixLength?: pulumi.Input<number>, networkName?: pulumi.Input<string> }>[]>;
    /**
     * Network mode of the container.
     */
    readonly networkMode?: pulumi.Input<string>;
    /**
     * Id of the networks in which the
     * container is. *Deprecated:* use `networks_advanced` instead.
     */
    readonly networks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * See Networks Advanced below for details. If this block has priority to the deprecated `network_alias` and `network` properties.
     */
    readonly networksAdvanced?: pulumi.Input<pulumi.Input<{ aliases?: pulumi.Input<pulumi.Input<string>[]>, ipv4Address?: pulumi.Input<string>, ipv6Address?: pulumi.Input<string>, name: pulumi.Input<string> }>[]>;
    /**
     * The PID (Process) Namespace mode for the container. Either `container:<name|id>` or `host`.
     */
    readonly pidMode?: pulumi.Input<string>;
    /**
     * See Ports below for details.
     */
    readonly ports?: pulumi.Input<pulumi.Input<{ external?: pulumi.Input<number>, internal: pulumi.Input<number>, ip?: pulumi.Input<string>, protocol?: pulumi.Input<string> }>[]>;
    /**
     * Run container in privileged mode.
     */
    readonly privileged?: pulumi.Input<boolean>;
    /**
     * Publish all ports of the container.
     */
    readonly publishAllPorts?: pulumi.Input<boolean>;
    /**
     * The restart policy for the container. Must be
     * one of "no", "on-failure", "always", "unless-stopped".
     */
    readonly restart?: pulumi.Input<string>;
    /**
     * If true, then the container will be automatically removed after his execution. Terraform
     * won't check this container after creation.
     */
    readonly rm?: pulumi.Input<boolean>;
    /**
     * If true, then the Docker container will be
     * started after creation. If false, then the container is only created.
     */
    readonly start?: pulumi.Input<boolean>;
    /**
     * See Ulimits below for
     * details.
     */
    readonly ulimits?: pulumi.Input<pulumi.Input<{ hard: pulumi.Input<number>, name: pulumi.Input<string>, soft: pulumi.Input<number> }>[]>;
    /**
     * See File Upload below for details.
     */
    readonly uploads?: pulumi.Input<pulumi.Input<{ content: pulumi.Input<string>, executable?: pulumi.Input<boolean>, file: pulumi.Input<string> }>[]>;
    /**
     * User used for run the first process. Format is
     * `user` or `user:group` which user and group can be passed literraly or
     * by name.
     */
    readonly user?: pulumi.Input<string>;
    /**
     * Sets the usernamespace mode for the container when usernamespace remapping option is enabled.
     */
    readonly usernsMode?: pulumi.Input<string>;
    /**
     * See Volumes below for details.
     */
    readonly volumes?: pulumi.Input<pulumi.Input<{ containerPath?: pulumi.Input<string>, fromContainer?: pulumi.Input<string>, hostPath?: pulumi.Input<string>, readOnly?: pulumi.Input<boolean>, volumeName?: pulumi.Input<string> }>[]>;
}

/**
 * The set of arguments for constructing a Container resource.
 */
export interface ContainerArgs {
    /**
     * If true attach to the container after its creation and waits the end of his execution.
     */
    readonly attach?: pulumi.Input<boolean>;
    /**
     * See Capabilities below for details.
     */
    readonly capabilities?: pulumi.Input<{ adds?: pulumi.Input<pulumi.Input<string>[]>, drops?: pulumi.Input<pulumi.Input<string>[]> }>;
    /**
     * The command to use to start the
     * container. For example, to run `/usr/bin/myprogram -f baz.conf` set the
     * command to be `["/usr/bin/myprogram", "-f", "baz.conf"]`.
     */
    readonly command?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`.
     */
    readonly cpuSet?: pulumi.Input<string>;
    /**
     * CPU shares (relative weight) for the container.
     */
    readonly cpuShares?: pulumi.Input<number>;
    /**
     * If defined will attempt to stop the container before destroying. Container will be destroyed after `n` seconds or on successful stop.
     */
    readonly destroyGraceSeconds?: pulumi.Input<number>;
    /**
     * See Devices below for details.
     */
    readonly devices?: pulumi.Input<pulumi.Input<{ containerPath?: pulumi.Input<string>, hostPath: pulumi.Input<string>, permissions?: pulumi.Input<string> }>[]>;
    /**
     * Set of DNS servers.
     */
    readonly dns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Set of DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options.
     */
    readonly dnsOpts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Set of DNS search domains that are used when bare unqualified hostnames are used inside of the container.
     */
    readonly dnsSearches?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Domain name of the container.
     */
    readonly domainname?: pulumi.Input<string>;
    /**
     * The command to use as the
     * Entrypoint for the container. The Entrypoint allows you to configure a
     * container to run as an executable. For example, to run `/usr/bin/myprogram`
     * when starting a container, set the entrypoint to be
     * `["/usr/bin/myprogram"]`.
     */
    readonly entrypoints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Environment variables to set.
     */
    readonly envs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * See Healthcheck below for details.
     */
    readonly healthcheck?: pulumi.Input<{ interval?: pulumi.Input<string>, retries?: pulumi.Input<number>, startPeriod?: pulumi.Input<string>, tests: pulumi.Input<pulumi.Input<string>[]>, timeout?: pulumi.Input<string> }>;
    /**
     * Hostname to add.
     */
    readonly hosts?: pulumi.Input<pulumi.Input<{ host: pulumi.Input<string>, ip: pulumi.Input<string> }>[]>;
    /**
     * Hostname of the container.
     */
    readonly hostname?: pulumi.Input<string>;
    /**
     * The ID of the image to back this container.
     * The easiest way to get this value is to use the `docker_image` resource
     * as is shown in the example above.
     */
    readonly image: pulumi.Input<string>;
    /**
     * Key/value pairs to set as labels on the
     * container.
     */
    readonly labels?: pulumi.Input<{[key: string]: any}>;
    /**
     * Set of links for link based
     * connectivity between containers that are running on the same host.
     */
    readonly links?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The logging driver to use for the container.
     * Defaults to "json-file".
     */
    readonly logDriver?: pulumi.Input<string>;
    /**
     * Key/value pairs to use as options for
     * the logging driver.
     */
    readonly logOpts?: pulumi.Input<{[key: string]: any}>;
    /**
     * Save the container logs (`attach` must be enabled).
     */
    readonly logs?: pulumi.Input<boolean>;
    /**
     * The maximum amount of times to an attempt
     * a restart when `restart` is set to "on-failure"
     */
    readonly maxRetryCount?: pulumi.Input<number>;
    /**
     * The memory limit for the container in MBs.
     */
    readonly memory?: pulumi.Input<number>;
    /**
     * The total memory limit (memory + swap) for the
     * container in MBs. This setting may compute to `-1` after `terraform apply` if the target host doesn't support memory swap, when that is the case docker will use a soft limitation.
     */
    readonly memorySwap?: pulumi.Input<number>;
    /**
     * If true, then the Docker container will be
     * kept running. If false, then as long as the container exists, Terraform
     * assumes it is successful.
     */
    readonly mustRun?: pulumi.Input<boolean>;
    readonly name?: pulumi.Input<string>;
    /**
     * Network aliases of the container for user-defined networks only. *Deprecated:* use `networks_advanced` instead.
     */
    readonly networkAliases?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Network mode of the container.
     */
    readonly networkMode?: pulumi.Input<string>;
    /**
     * Id of the networks in which the
     * container is. *Deprecated:* use `networks_advanced` instead.
     */
    readonly networks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * See Networks Advanced below for details. If this block has priority to the deprecated `network_alias` and `network` properties.
     */
    readonly networksAdvanced?: pulumi.Input<pulumi.Input<{ aliases?: pulumi.Input<pulumi.Input<string>[]>, ipv4Address?: pulumi.Input<string>, ipv6Address?: pulumi.Input<string>, name: pulumi.Input<string> }>[]>;
    /**
     * The PID (Process) Namespace mode for the container. Either `container:<name|id>` or `host`.
     */
    readonly pidMode?: pulumi.Input<string>;
    /**
     * See Ports below for details.
     */
    readonly ports?: pulumi.Input<pulumi.Input<{ external?: pulumi.Input<number>, internal: pulumi.Input<number>, ip?: pulumi.Input<string>, protocol?: pulumi.Input<string> }>[]>;
    /**
     * Run container in privileged mode.
     */
    readonly privileged?: pulumi.Input<boolean>;
    /**
     * Publish all ports of the container.
     */
    readonly publishAllPorts?: pulumi.Input<boolean>;
    /**
     * The restart policy for the container. Must be
     * one of "no", "on-failure", "always", "unless-stopped".
     */
    readonly restart?: pulumi.Input<string>;
    /**
     * If true, then the container will be automatically removed after his execution. Terraform
     * won't check this container after creation.
     */
    readonly rm?: pulumi.Input<boolean>;
    /**
     * If true, then the Docker container will be
     * started after creation. If false, then the container is only created.
     */
    readonly start?: pulumi.Input<boolean>;
    /**
     * See Ulimits below for
     * details.
     */
    readonly ulimits?: pulumi.Input<pulumi.Input<{ hard: pulumi.Input<number>, name: pulumi.Input<string>, soft: pulumi.Input<number> }>[]>;
    /**
     * See File Upload below for details.
     */
    readonly uploads?: pulumi.Input<pulumi.Input<{ content: pulumi.Input<string>, executable?: pulumi.Input<boolean>, file: pulumi.Input<string> }>[]>;
    /**
     * User used for run the first process. Format is
     * `user` or `user:group` which user and group can be passed literraly or
     * by name.
     */
    readonly user?: pulumi.Input<string>;
    /**
     * Sets the usernamespace mode for the container when usernamespace remapping option is enabled.
     */
    readonly usernsMode?: pulumi.Input<string>;
    /**
     * See Volumes below for details.
     */
    readonly volumes?: pulumi.Input<pulumi.Input<{ containerPath?: pulumi.Input<string>, fromContainer?: pulumi.Input<string>, hostPath?: pulumi.Input<string>, readOnly?: pulumi.Input<boolean>, volumeName?: pulumi.Input<string> }>[]>;
}
